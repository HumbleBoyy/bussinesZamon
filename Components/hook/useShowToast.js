import { useToast } from "@chakra-ui/react"


const useShowToast = ()=> {
    const toast = useToast()
    toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
}
export default useShowToast