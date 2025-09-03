'use client';

import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Store, Product, storeData, productData } from '@/lib/demo-data';
import { DataTable } from '@/components/data-table';
import {
  createColumnHelper,
  DataTableColumnHeader,
  StatusBadge,
  LinkButton,
} from '@/components/data-table-components';
import { Badge } from '@/components/ui/badge';

import { Eye, Edit, Trash2 } from 'lucide-react';

const Page = () => {
  const columnHelper = createColumnHelper();

  const createHandlers = <T,>(entityName: string) => ({
    handleExport: (selectedItems: T[]) => {
      console.log(`Exporting ${entityName}:`, selectedItems);
      alert(`Exporting ${selectedItems.length} ${entityName} to CSV`);
    },
    handleSelection: (selectedItems: T[]) => {
      console.log(`Selected ${entityName}:`, selectedItems);
    },
  });

  const storeHandlers = createHandlers<Store>('stores');
  const productHandlers = createHandlers<Product>('products');

  const commonTableProps = {
    enableRowSelection: true,
    enableExport: true,
    enableGlobalSearch: true,
    enableColumnFilters: true,
    enableColumnVisibility: true,
    pageSizeOptions: [5, 10, 20, 50],
    className: 'bg-white rounded-lg border shadow-sm',
  };

  const handleStoreEdit = (
    rowId: string,
    field: string,
    newValue: string | number,
    rowData: Store
  ) => {
    console.log(
      `Editing store ${rowId}, field: ${field}, new value:`,
      newValue
    );
    console.log('Full row data:', rowData);
    alert(`Updated ${field} for ${rowData.name} to: ${newValue}`);
  };

  const handleProductEdit = (
    rowId: string,
    field: string,
    newValue: string | number,
    rowData: Product
  ) => {
    console.log(
      `Editing product ${rowId}, field: ${field}, new value:`,
      newValue
    );
    console.log('Full row data:', rowData);
    alert(`Updated ${field} for ${rowData.name} to: ${newValue}`);
  };

  const createStandardActions = <T,>(entityType: string) => [
    {
      label: `View ${entityType}`,
      onClick: (item: T) => console.log(`View ${entityType}:`, item),
      icon: Eye,
      destructive: false,
      disabled: false,
    },
    {
      label: `Edit ${entityType}`,
      onClick: (item: T) => console.log(`Edit ${entityType}:`, item),
      icon: Edit,
      destructive: false,
      disabled: false,
    },
    {
      label: `Delete ${entityType}`,
      onClick: (item: T) => console.log(`Delete ${entityType}:`, item),
      icon: Trash2,
      destructive: true,
      disabled: false,
    },
  ];

  const storeColumns: ColumnDef<Store>[] = [
    columnHelper.editable(
      'name',
      'Store',
      (rowId, newValue, rowData) =>
        handleStoreEdit(rowId, 'name', newValue, rowData),
      {
        placeholder: 'Enter store name',
        maxLength: 50,
      }
    ),
    {
      accessorKey: 'city',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='City' />
      ),
      cell: ({ row }) => (
        <div className='font-medium'>
          {row.original.city}, {row.original.state}
        </div>
      ),
    },
    columnHelper.editable(
      'email',
      'Email',
      (rowId, newValue, rowData) =>
        handleStoreEdit(rowId, 'email', newValue, rowData),
      {
        type: 'email',
        placeholder: 'Enter email address',
        maxLength: 100,
      }
    ),
    columnHelper.status('registrationStatus', 'Registration Status'),
    columnHelper.text('merchantType', 'Merchant Type'),
    {
      accessorKey: 'revenue',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Revenue' />
      ),
      cell: ({ getValue }) => (
        <div className='text-right font-mono font-medium'>
          ${(getValue() as number).toLocaleString()}
        </div>
      ),
    },
    {
      id: 'go-to-store',
      header: 'Action',
      cell: ({ row }) => (
        <LinkButton
          href={`/store/${row.original.storeId}`}
          variant='default'
          className='bg-teal-600 hover:bg-teal-700 text-white'
        >
          Go to store
        </LinkButton>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    columnHelper.actions(createStandardActions<Store>('Store')),
  ];

  const productColumns: ColumnDef<Product>[] = [
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Product' />
      ),
      cell: ({ row }) => (
        <div className='flex items-center space-x-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-md bg-muted'>
            <div className='text-xs font-medium text-muted-foreground'>
              {row.original.name.slice(0, 2).toUpperCase()}
            </div>
          </div>
          <div className='space-y-1'>
            <div className='font-medium'>{row.original.name}</div>
            <div className='text-xs text-muted-foreground'>
              ID: {row.original.productId}
            </div>
          </div>
        </div>
      ),
    },
    columnHelper.editable(
      'brand',
      'Brand',
      (rowId, newValue, rowData) =>
        handleProductEdit(rowId, 'brand', newValue, rowData),
      {
        placeholder: 'Enter brand name',
        maxLength: 30,
      }
    ),
    {
      accessorKey: 'category',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Category' />
      ),
      cell: ({ getValue }) => (
        <Badge variant='outline' className='text-xs'>
          {getValue() as string}
        </Badge>
      ),
    },
    columnHelper.editable(
      'size',
      'Size',
      (rowId, newValue, rowData) =>
        handleProductEdit(rowId, 'size', newValue, rowData),
      {
        placeholder: 'Enter size',
        maxLength: 20,
        sortable: false,
      }
    ),
    {
      accessorKey: 'priceType',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Price Type' />
      ),
      cell: ({ getValue }) => (
        <StatusBadge
          status={getValue() as string}
          variant={getValue() === 'fixed' ? 'default' : 'secondary'}
        />
      ),
    },
    columnHelper.editable(
      'price',
      'Price',
      (rowId, newValue, rowData) =>
        handleProductEdit(rowId, 'price', newValue, rowData),
      {
        type: 'number',
        placeholder: '0.00',
      }
    ),
    {
      accessorKey: 'stock',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Stock' />
      ),
      cell: ({ getValue }) => {
        const stock = getValue() as number;
        return (
          <div className='text-right'>
            <span
              className={`font-medium ${
                stock < 50 ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {stock}
            </span>
          </div>
        );
      },
    },
    columnHelper.actions(createStandardActions<Product>('Product')),
  ];

  return (
    <div className='min-h-screen bg-background'>
      <div className='border-b bg-white'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-md bg-teal-600 text-white font-bold'>
                E
              </div>
              <div>
                <h1 className='text-2xl font-bold text-gray-900'>ETNOWE</h1>
                <p className='text-sm text-gray-500'>Dashboard Table POC</p>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='flex items-center space-x-2 text-sm text-gray-600'>
                <span>Musawir</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 py-8 space-y-12'>
        <section className='space-y-6'>
          <DataTable
            columns={storeColumns}
            data={storeData}
            title='Store Listing'
            description='Manage and monitor all registered stores across different locations and merchant types.'
            searchKey='name'
            onRowSelectionChange={storeHandlers.handleSelection}
            onExport={storeHandlers.handleExport}
            {...commonTableProps}
          />
        </section>

        <section className='space-y-6'>
          <DataTable
            columns={productColumns}
            data={productData}
            title='Inventory'
            description='Track and manage product inventory across all categories with real-time stock levels.'
            searchKey='name'
            onRowSelectionChange={productHandlers.handleSelection}
            onExport={productHandlers.handleExport}
            {...commonTableProps}
          />
        </section>
      </div>
    </div>
  );
};

export default Page;
