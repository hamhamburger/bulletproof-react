/* eslint-disable testing-library/no-debug */
import { render, screen, waitFor } from '@testing-library/react';

import { userEvent } from '@/test/test-utils';

import { Button } from '../../Button';
import { ConfirmationDialog } from '../ConfirmationDialog';

test('should handle confirmation flow', async () => {
  const titleText = 'Are you sure?';
  const bodyText = 'Are you sure you want to delete this item?';
  const confirmationButtonText = 'Confirm';
  const openButtonText = 'Open';
  await render(
    <ConfirmationDialog
      icon="danger"
      title={titleText}
      body={bodyText}
      confirmButton={<Button>{confirmationButtonText}</Button>}
      triggerButton={<Button>{openButtonText}</Button>}
    />
  );
  screen.debug();
  expect(screen.queryByText(titleText)).not.toBeInTheDocument();
  userEvent.click(screen.getByRole('button', { name: openButtonText }));
  expect(screen.queryByText(bodyText)).toBeInTheDocument();

  userEvent.click(screen.getByRole('button', { name: 'Cancel' }));

  await waitFor(() => expect(screen.queryByText(titleText)).not.toBeInTheDocument());

  expect(screen.queryByText(bodyText)).not.toBeInTheDocument();
});
