import {
  ErrorIcon,
  WarningIcon,
  InfoIcon,
  CheckBoldIcon,
} from '@commercetools-uikit/icons';
import { Box, styled } from "../stitches.config";

type TNotificationProps = {
  type: 'info' | 'success' | 'error' | 'warning';
  message: string;
};

const getIcon = (notificationType: TNotificationProps['type']) => {
  switch (notificationType) {
    case 'info':
      return InfoIcon;
    case 'error':
      return ErrorIcon;
    case 'warning':
      return WarningIcon;
    case 'success':
    default:
      return CheckBoldIcon;
  }
}

const IconWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$radius6 0 0 $radius6',
  borderWidth: 0,
  padding: '$S $M',
  '> svg': {
    margin: '-0 -3',
  },

  variants: {
    type: {
      info: {
        backgroundColor: '$info',
      },
      success: {
        backgroundColor: '$primary',
      },
      warning: {
        backgroundColor: '$warning',
      },
      error: {
        backgroundColor: '$error',
      },
    }
  }
});

const MessageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
  padding: '$S',
  background: '$surface',
  borderRadius: '0 $radius6 $radius6 0',
  borderWidth: '1px',
  borderStyle: 'solid',

  variants: {
    type: {
      info: {
        borderColor: '$info',
      },
      success: {
        borderColor: '$primary',
      },
      warning: {
        borderColor: '$warning',
      },
      error: {
        borderColor: '$error',
      },
    }
  }
});

function Notification({ type = 'info', message }: TNotificationProps) {
  const Icon = getIcon(type);
  return (
    <Box css={{
      display: 'flex',
      alignItems: 'strech',
      textAlign: 'left',
      wordBreak: 'break-word',
      hyphens: 'auto',
      fontSize: '$M',
      color: '$solid',
      fontFamily: '$sans',
    }}>
      <IconWrapper type={type}>
        <Icon color="surface" />
      </IconWrapper>
      <MessageWrapper type={type}>
        {message}
      </MessageWrapper>
    </Box>
  );
}

export default Notification;