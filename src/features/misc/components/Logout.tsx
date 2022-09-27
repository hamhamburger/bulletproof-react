import { Button, ConfirmationDialog } from '@/components/Elements';

const Logout = (): JSX.Element => {
  return (
    <ConfirmationDialog
      title="Are you sure to log out?"
      confirmButton={
        <Button
          onClick={() => {
            window.location.href = '/login';
          }}
        >
          Logout
        </Button>
      }
      triggerButton={<Button variant="primary">Logout</Button>}
    />
  );
};
export default Logout;
