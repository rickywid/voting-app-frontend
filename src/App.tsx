import { Box, Container } from "@chakra-ui/react";
import routes from "./routes";
import AuthProvider from "./context/auth";
import Header from "./components/header";

function App() {
  return (
    <Container maxW="container.xl">
      <AuthProvider>
        <Header />
        <Box mt={100}>{routes}</Box>
      </AuthProvider>
    </Container>
  );
}

export default App;
