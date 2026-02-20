import React, { forwardRef } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    hint?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, error, hint, id, className = '', ...props }, ref) => {
        const fieldId = id || props.name;
        const hasError = Boolean(error);

        const wrapperClass = [
            'form-field',
            hasError ? 'form-field--error' : '',
            props.disabled ? 'form-field--disabled' : '',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <div className={wrapperClass}>
                {label && (
                    <label htmlFor={fieldId} className="form-field__label">
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    id={fieldId}
                    className="form-field__input form-field__input--textarea"
                    aria-invalid={hasError}
                    aria-describedby={
                        hasError ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined
                    }
                    {...props}
                />
                {hasError && (
                    <span id={`${fieldId}-error`} className="form-field__error" role="alert">
                        {error}
                    </span>
                )}
                {hint && !hasError && (
                    <span id={`${fieldId}-hint`} className="form-field__hint">
                        {hint}
                    </span>
                )}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

export default Textarea;
