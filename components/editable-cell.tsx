import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface EditableCellProps {
  value: string | number;
  onSave: (newValue: string | number) => void;
  type?: 'text' | 'number' | 'email';
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  maxLength?: number;
}

export function EditableCell({
  value,
  onSave,
  type = 'text',
  placeholder,
  className,
  disabled = false,
  maxLength,
}: EditableCellProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value?.toString() || '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEditValue(value?.toString() || '');
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (editValue !== value?.toString()) {
      const finalValue =
        type === 'number' ? parseFloat(editValue) || 0 : editValue;
      onSave(finalValue);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value?.toString() || '');
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
    }
  };

  if (disabled) {
    return <div className={cn('px-2 py-1 text-sm', className)}>{value}</div>;
  }

  if (isEditing) {
    return (
      <Input
        ref={inputRef}
        type={type}
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        maxLength={maxLength}
        className={cn('h-8 text-sm', className)}
      />
    );
  }

  return (
    <div
      onClick={() => !disabled && setIsEditing(true)}
      className={cn(
        'px-2 py-1 text-sm rounded cursor-pointer hover:bg-muted/50 transition-colors min-h-[32px] flex items-center',
        className
      )}
      title='Click to edit'
    >
      {value || (
        <span className='text-muted-foreground italic'>
          {placeholder || 'Click to edit'}
        </span>
      )}
    </div>
  );
}
