import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import AdminSidebar from "../Sidebar/adminSidebar";


function AdminHeader() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <AdminSidebar />
                <Navbar.Brand href="#home">
                    <strong> Admin</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

            </Container>
        </Navbar>
    );
}

export default AdminHeader;
