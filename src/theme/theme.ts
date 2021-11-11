import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: false,
    styles: {
        global: {
            body: {
                background:"#93a4a8",
                color: '#322727'

            }
        }
    }
})

export default theme;