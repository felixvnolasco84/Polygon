type SimpleContactEmailProps = {
  email: string;
};

const SimpleContactOnlyEmail = ({ email }: SimpleContactEmailProps) => (
  <div>
    <h1>Nuevo Contacto</h1>
    <p>Con el correo {email}</p>
  </div>
);

export default SimpleContactOnlyEmail;
