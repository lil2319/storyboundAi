import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import logo from '../assets/storyBoundLogo.png';
import { ActionToggle } from './ActionToggle';
import { Link } from 'react-router-dom';



const links = [
    { link: '/', label: 'Home' },
];

export default function HeaderSimple() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <Link
            key={link.label}
            to={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={() => setActive(link.link)}
        >
            {link.label}
        </Link>
    ));


    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <div className={classes.logoContainer}>
                    <img src={logo} alt="Storybound Logo" className={classes.logo} />
                    <span className={classes.logoText}>Storybound.ai</span>
                </div>

                <Group gap={5} visibleFrom="xs">
                    {items}
                    <ActionToggle />
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>

        </header>
    );
}
