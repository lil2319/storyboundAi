import { IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Group, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';

export function ActionToggle() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    const iconStyle = {
        position: 'absolute',
        transition: 'transform 0.3s ease',
    };

    return (
        <Group justify="center">
            <ActionIcon
                onClick={() =>
                    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
                }
                variant="default"
                size="xl"
                radius="md"
                aria-label="Toggle color scheme"
                style={{ position: 'relative' }}
            >
                <IconSun
                    style={{
                        ...iconStyle,
                        transform: computedColorScheme === 'dark' ? 'scale(0)' : 'scale(1)',
                    }}
                    stroke={1.5}
                />
                <IconMoon
                    style={{
                        ...iconStyle,
                        transform: computedColorScheme === 'dark' ? 'scale(1)' : 'scale(0)',
                    }}
                    stroke={1.5}
                />
            </ActionIcon>
        </Group>
    );
}
