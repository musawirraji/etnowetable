'use client';

import * as React from 'react';
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  ExternalLink,
} from 'lucide-react';
import { Column } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { EditableCell } from './editable-cell';

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  const sorted = column.getIsSorted();

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Button
        variant='ghost'
        size='sm'
        className='-ml-3 h-8 data-[state=open]:bg-accent'
        onClick={() => column.toggleSorting(sorted === 'asc')}
      >
        <span>{title}</span>
        {sorted === 'desc' ? (
          <ArrowDown className='ml-2 h-4 w-4' />
        ) : sorted === 'asc' ? (
          <ArrowUp className='ml-2 h-4 w-4' />
        ) : (
          <ArrowUpDown className='ml-2 h-4 w-4' />
        )}
      </Button>
    </div>
  );
}

export interface StatusBadgeProps {
  status: string;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string;
}

export function StatusBadge({
  status,
  variant = 'default',
  className,
}: StatusBadgeProps) {
  const getStatusVariant = (status: string) => {
    const lowercaseStatus = status.toLowerCase();
    switch (lowercaseStatus) {
      case 'verified':
      case 'active':
      case 'completed':
      case 'approved':
        return 'default';
      case 'not_verified':
      case 'pending':
      case 'in_review':
      case 'processing':
        return 'secondary';
      case 'rejected':
      case 'cancelled':
      case 'failed':
      case 'inactive':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const formatStatus = (status: string) => {
    return status
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <Badge
      variant={variant === 'default' ? getStatusVariant(status) : variant}
      className={cn('text-xs', className)}
    >
      {formatStatus(status)}
    </Badge>
  );
}

export interface DataTableRowActionsProps<TData> {
  row: TData;
  actions?: Array<{
    label: string;
    onClick: (row: TData) => void;
    icon?: React.ComponentType<{ className?: string }>;
    destructive?: boolean;
    disabled?: boolean;
  }>;
}

export function DataTableRowActions<TData>({
  row,
  actions = [],
}: DataTableRowActionsProps<TData>) {
  const defaultActions = [
    {
      label: 'View Details',
      onClick: (row: TData) => console.log('View:', row),
      icon: Eye,
      destructive: false,
      disabled: false,
    },
    {
      label: 'Edit',
      onClick: (row: TData) => console.log('Edit:', row),
      icon: Edit,
      destructive: false,
      disabled: false,
    },
    {
      label: 'Delete',
      onClick: (row: TData) => console.log('Delete:', row),
      icon: Trash2,
      destructive: true,
      disabled: false,
    },
  ];

  const allActions = actions.length > 0 ? actions : defaultActions;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
        >
          <MoreHorizontal className='h-4 w-4' />
          <span className='sr-only'>Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-[160px]'>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {allActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <DropdownMenuItem
              key={index}
              onClick={() => action.onClick(row)}
              disabled={action.disabled}
              className={cn(
                action.destructive && 'text-destructive focus:text-destructive'
              )}
            >
              {Icon && <Icon className='mr-2 h-4 w-4' />}
              {action.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export interface ActionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  disabled?: boolean;
}

export function ActionButton({
  onClick,
  children,
  variant = 'default',
  size = 'sm',
  className,
  disabled,
}: ActionButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={cn(className)}
    >
      {children}
    </Button>
  );
}

export interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  external?: boolean;
}

export function LinkButton({
  href,
  children,
  variant = 'outline',
  size = 'sm',
  className,
  external = false,
}: LinkButtonProps) {
  const handleClick = () => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = href;
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={cn(className)}
    >
      {children}
      {external && <ExternalLink className='ml-2 h-3 w-3' />}
    </Button>
  );
}

export const createColumnHelper = () => {
  return {
    text: <T,>(accessor: keyof T, header: string, sortable = true) => ({
      accessorKey: accessor as string,
      header: ({ column }: { column: Column<T, unknown> }) =>
        sortable ? (
          <DataTableColumnHeader column={column} title={header} />
        ) : (
          <div>{header}</div>
        ),
      cell: ({ getValue }: { getValue: () => unknown }) => (
        <div className='max-w-[200px] truncate font-medium'>
          {getValue() as string}
        </div>
      ),
    }),

    status: <T,>(accessor: keyof T, header: string) => ({
      accessorKey: accessor as string,
      header: ({ column }: { column: Column<T, unknown> }) => (
        <DataTableColumnHeader column={column} title={header} />
      ),
      cell: ({ getValue }: { getValue: () => unknown }) => (
        <StatusBadge status={getValue() as string} />
      ),
      filterFn: (
        row: { getValue: (id: string) => unknown },
        id: string,
        value: string
      ) => {
        return value.includes(row.getValue(id) as string);
      },
    }),

    actions: <T,>(
      actions?: Array<{
        label: string;
        onClick: (row: T) => void;
        icon?: React.ComponentType<{ className?: string }>;
        destructive?: boolean;
        disabled?: boolean;
      }>
    ) => ({
      id: 'actions',
      header: 'Actions',
      cell: ({ row }: { row: { original: T } }) => (
        <DataTableRowActions row={row.original} actions={actions} />
      ),
      enableSorting: false,
      enableHiding: false,
    }),

    number: <T,>(accessor: keyof T, header: string, sortable = true) => ({
      accessorKey: accessor as string,
      header: ({ column }: { column: Column<T, unknown> }) =>
        sortable ? (
          <DataTableColumnHeader column={column} title={header} />
        ) : (
          <div>{header}</div>
        ),
      cell: ({ getValue }: { getValue: () => unknown }) => (
        <div className='text-right font-mono'>
          {(getValue() as number)?.toLocaleString() ?? 'N/A'}
        </div>
      ),
    }),

    date: <T,>(accessor: keyof T, header: string, sortable = true) => ({
      accessorKey: accessor as string,
      header: ({ column }: { column: Column<T, unknown> }) =>
        sortable ? (
          <DataTableColumnHeader column={column} title={header} />
        ) : (
          <div>{header}</div>
        ),
      cell: ({ getValue }: { getValue: () => unknown }) => {
        const date = getValue() as string | Date;
        if (!date) return <div>N/A</div>;

        const formatted =
          typeof date === 'string'
            ? new Date(date).toLocaleDateString()
            : date.toLocaleDateString();

        return <div className='text-sm text-muted-foreground'>{formatted}</div>;
      },
    }),

    actionButton: <T,>(
      header: string,
      buttonText: string,
      onClick: (row: T) => void,
      variant:
        | 'default'
        | 'destructive'
        | 'outline'
        | 'secondary'
        | 'ghost'
        | 'link' = 'default'
    ) => ({
      id: `action-${header.toLowerCase().replace(/\s+/g, '-')}`,
      header,
      cell: ({ row }: { row: { original: T } }) => (
        <ActionButton onClick={() => onClick(row.original)} variant={variant}>
          {buttonText}
        </ActionButton>
      ),
      enableSorting: false,
      enableHiding: false,
    }),

    editable: <T,>(
      accessor: keyof T,
      header: string,
      onSave: (rowId: string, newValue: string | number, rowData: T) => void,
      options?: {
        type?: 'text' | 'number' | 'email';
        placeholder?: string;
        disabled?: (row: T) => boolean;
        maxLength?: number;
        sortable?: boolean;
      }
    ) => ({
      accessorKey: accessor as string,
      header: ({ column }: { column: Column<T, unknown> }) =>
        options?.sortable !== false ? (
          <DataTableColumnHeader column={column} title={header} />
        ) : (
          <div>{header}</div>
        ),
      cell: ({
        getValue,
        row,
      }: {
        getValue: () => unknown;
        row: { id: string; original: T };
      }) => (
        <EditableCell
          value={getValue() as string | number}
          onSave={(newValue) => onSave(row.id, newValue, row.original)}
          type={options?.type}
          placeholder={options?.placeholder}
          disabled={options?.disabled ? options.disabled(row.original) : false}
          maxLength={options?.maxLength}
        />
      ),
    }),
  };
};
