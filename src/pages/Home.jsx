import { Button, Container, Group, Text } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import classes from './HeroTitle.module.css';
import { useNavigate } from 'react-router-dom';
import HeaderSimple from '../components/Header';


export default function HeroTitle() {

    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/recommendationPage');
    };

    return (
        <div>
            <HeaderSimple />
            <div className={classes.wrapper}>
                <Container size={700} className={classes.inner}>

                    <h1 className={classes.title}>
                        <Text
                            component="span"
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'cyan' }}
                            inherit
                        >
                            AI-Powered
                        </Text>{' '}
                        Book Recommendations
                    </h1>

                    <Text className={classes.description} c="dimmed">
                        Explore a world of stories with personalized recommendations, tailored just for you.
                    </Text>

                    <Group className={classes.controls}>
                        <Button
                            size="xl"
                            className={classes.control}
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'cyan' }}
                            onClick={handleGetStarted}
                        >
                            Get started
                        </Button>

                        <Button
                            component="a"
                            href="https://github.com/lil2319/storyboundAi"
                            size="xl"
                            variant="default"
                            className={classes.control}
                            leftSection={<IconBrandGithub size={20} />}
                        >
                            GitHub
                        </Button>
                    </Group>

                </Container>
            </div>
        </div>
    );
}
