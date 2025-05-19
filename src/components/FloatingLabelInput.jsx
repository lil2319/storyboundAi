import { TextInput } from '@mantine/core';
import classes from './FloatingLabelInput.module.css';

export function FloatingLabelInput({ value, onChange, onFocus, onBlur }) {
    const floating = value.trim().length !== 0 || onFocus || undefined;

    return (
        <TextInput
            label="Book Title"
            placeholder="Enter a Book Title"
            required
            classNames={classes}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            mt="md"
            w="25%"
            autoComplete="nope"
            data-floating={floating}
            labelProps={{ 'data-floating': floating }}
        />
    );
}
