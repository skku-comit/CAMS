import clsx from 'clsx'

interface ProfileInputProps {
  label: string
  type: 'text' | 'email' | 'tel' | 'number' | 'url' | 'textarea'
  value: string
  disabled: boolean
  isEditing: boolean
  onChange?: (value: string) => void
}

export default function ProfileInput({
  label,
  type,
  value,
  disabled,
  isEditing,
  onChange
}: ProfileInputProps) {
  const commonClassNames = clsx(
    'w-full rounded-lg px-3 py-2 text-[13px] transition-colors',
    isEditing 
      ? 'border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/30' 
      : 'bg-gray-50 text-gray-700'
  )

  return (
    <div>
      <label className="block text-[13px] text-gray-500 mb-1">{label}</label>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          rows={3}
          className={commonClassNames}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          className={commonClassNames}
        />
      )}
    </div>
  )
} 