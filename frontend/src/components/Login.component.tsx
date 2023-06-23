import React, { useState } from 'react'
import axios from 'axios'
import { 
    Card, CardBody, Button, Flex, FormControl, Input, FormLabel, useToast
} from '@chakra-ui/react'
import useTokenStore from '../store/TokenStore'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitMessage, setSubmitMessage] = useState('Login')
    const [loggingIn, setLoggingIn] = useState(false)
    const token = useTokenStore((state: { token: string }) => state.token)

    const toast = useToast()

    const submitForm = () => {
        if (email && password) {
            setSubmitMessage('Logging In...')
            setLoggingIn(true);

            axios.post('http://localhost/api/login', {
                email,
                password
            })
            .then(response => {
                console.log(response)
                useTokenStore.setState(response.data.data.token)

                toast({
                    title: 'Login Successful',
                    description: `You have successfully logged in! Great job, ${response.data.data.name}`,
                    duration: 5000,
                    status: 'success'
                })
            })
            .catch(error => {
                toast({
                    title: 'Login Failed',
                    description: 'Something went wrong. Try again later.',
                    duration: 5000,
                    status: 'error'
                })
                
                console.error(error)
            })
            .finally(() => {
                setLoggingIn(false)
                setSubmitMessage('Login')
            })
        }
    }

    return (
        <Flex align="center" justify="center" marginTop="100px">
            <Card maxW="50%">
                <CardBody>
                    <FormControl>
                        <FormLabel>Email Address</FormLabel>
                        <Input type="email" value={email} onChange={e => setEmail(e.target.value)}></Input>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" value={password} onChange={e => setPassword(e.target.value)}></Input>
                    </FormControl>

                    <Button size="md" onClick={submitForm} isLoading={loggingIn} marginTop="50px">{submitMessage}</Button>
                </CardBody>
            </Card>
        </Flex>
    )
}

export default Login