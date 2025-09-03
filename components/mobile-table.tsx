'use client';

import * as React from 'react';
import { Store, Product } from '@/lib/demo-data';
import { StatusBadge, LinkButton } from './data-t                                                                    able-components';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { MoreHorizontal, Eye, Edit, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface MobileStoreCardProps {
  store: Store;
  isSelected: boolean;
  onSelectionChange: (selected: boolean) => void;
}

export function MobileStoreCard({
  store,
  isSelected,
  onSelectionChange,
}: MobileStoreCardProps) {
  return (
    <Card className='w-full'>
      <CardContent className='p-4'>
        <div className='flex items-start justify-between mb-3'>
          <div className='flex items-center space-x-3'>
            <Checkbox
              checked={isSelected}
              onCheckedChange={onSelectionChange}
              aria-label='Select store'
            />
            <div>
              <h3 className='font-semibold text-lg'>{store.name}</h3>
              <p className='text-sm text-muted-foreground'>
                ID: {store.storeId}
              </p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='h-8 w-8 p-0'>
                <MoreHorizontal className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Eye className='mr-2 h-4 w-4' />
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className='mr-2 h-4 w-4' />
                Edit Store
              </DropdownMenuItem>
              <DropdownMenuItem className='text-destructive'>
                <Trash2 className='mr-2 h-4 w-4' />
                Delete Store
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className='space-y-2 mb-4'>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-muted-foreground'>Location:</span>
            <span className='text-sm font-medium'>
              {store.city}, {store.state}
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-muted-foreground'>Email:</span>
            <span className='text-sm truncate max-w-[150px]'>
              {store.email}
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-muted-foreground'>Type:</span>
            <span className='text-sm font-medium'>{store.merchantType}</span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-muted-foreground'>Revenue:</span>
            <span className='text-sm font-mono font-medium'>
              ${store.revenue.toLocaleString()}
            </span>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <StatusBadge status={store.registrationStatus} />
          <LinkButton
            href={`/store/${store.storeId}`}
            variant='default'
            className='bg-teal-600 hover:bg-teal-700 text-white'
          >
            Go to store
          </LinkButton>
        </div>
      </CardContent>
    </Card>
  );
}

interface MobileProductCardProps {
  product: Product;
  isSelected: boolean;
  onSelectionChange: (selected: boolean) => void;
}

export function MobileProductCard({
  product,
  isSelected,
  onSelectionChange,
}: MobileProductCardProps) {
  return (
    <Card className='w-full'>
      <CardContent className='p-4'>
        <div className='flex items-start justify-between mb-3'>
          <div className='flex items-center space-x-3'>
            <Checkbox
              checked={isSelected}
              onCheckedChange={onSelectionChange}
              aria-label='Select product'
            />
            <div className='flex items-center space-x-3'>
              <div className='flex h-12 w-12 items-center justify-center rounded-md bg-muted'>
                <div className='text-sm font-medium text-muted-foreground'>
                  {product.name.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <div>
                <h3 className='font-semibold'>{product.name}</h3>
                <p className='text-sm text-muted-foreground'>
                  ID: {product.productId}
                </p>
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='h-8 w-8 p-0'>
                <MoreHorizontal className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Eye className='mr-2 h-4 w-4' />
                View Product
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className='mr-2 h-4 w-4' />
                Edit Product
              </DropdownMenuItem>
              <DropdownMenuItem className='text-destructive'>
                <Trash2 className='mr-2 h-4 w-4' />
                Delete Product
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className='space-y-2 mb-4'>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-muted-foreground'>Brand:</span>
            <span className='text-sm font-medium'>{product.brand}</span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-muted-foreground'>Category:</span>
            <Badge variant='outline' className='text-xs'>
              {product.category}
            </Badge>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-muted-foreground'>Size:</span>
            <span className='text-sm'>{product.size}</span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-muted-foreground'>Price:</span>
            <span className='text-sm font-mono font-medium'>
              ${product.price.toFixed(2)}
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-muted-foreground'>Stock:</span>
            <span
              className={`text-sm font-medium ${
                product.stock < 50 ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {product.stock}
            </span>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <StatusBadge
            status={product.priceType}
            variant={product.priceType === 'fixed' ? 'default' : 'secondary'}
          />
        </div>
      </CardContent>
    </Card>
  );
}
