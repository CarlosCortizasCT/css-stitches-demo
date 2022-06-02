import { ComponentType } from "react";
import { styled } from "../stitches.config";

type TButtonProps = {
  as?: string | ComponentType;
  id?: string;
  label: string;
  type: 'button' | 'submit' | 'reset';
  kind: 'primary' | 'secondary';
  isDisabled?: boolean;
  size?: 'small' | 'large';
  tone?: 'urgent' | 'primary';
  onClick: () => void;
};

const resetButtonStyles = {
  display: 'inline-block',
  boxSizing: 'border-box',
  padding: '0',
  margin: '0',
  border: 'none',
  cursor: 'pointer',
  background: 'none',
  color: 'inherit',
  whiteSpace: 'nowrap',
  font: 'inherit',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  letterSpacing: 'inherit',
  wordSpacing: 'inherit',
  textDecoration: 'none',
  textRendering: 'inherit',
  textAlign: 'inherit',
  textTransform: 'inherit',
  textIndent: 'inherit',
  textShadow: 'inherit',
}

const backgroundColor = (color: string) => ({
  backgroundColor: color,
  '&:hover': {
    backgroundColor: `${color}25`,
  },
  '&:focus': {
    backgroundColor: `${color}25`,
  },
  '&:active': {
    backgroundColor: color,
  },
});

const BaseButton = styled('button', {
  ...resetButtonStyles,
  display: 'inline-flex',
  fontSize: '$M',
  '&:disabled': {
    cursor: 'not-allowed',
  },

  alignItems: 'center',
  color: '$surface',
  transition: 'background-color $linear80Ms',

  boxShadow: '$7',
  '&:hover': {
    boxShadow: '$8',
  },
  '&:focus': {
    boxShadow: '$8',
  },
  '&:active': {
    boxShadow: '$9',
  },

  variants: {
    kind: {
      primary: {},
      secondary: {
        backgroundColor: '$surface',
        color: '$solid',
      },
    },
    size: {
      small: {
        borderRadius: '$radius4',
        padding: '0 $S 0 $S',
        height: '24px'
      },
      large: {
        borderRadius: '$radius4',
        padding: '0 $M 0 $M',
        height: '32px'
      }
    },
    tone: {
      primary: backgroundColor('$primary'),
      urgent: backgroundColor('$warning'),
    }
  },

  compoundVariants: [
    {
      kind: 'secondary',
      tone: 'primary',
      css: {
        backgroundColor: '$surface',
        '&:hover': {
          backgroundColor: '$surface',
        },
        '&:focus': {
          backgroundColor: '$surface',
        },
        '&:active': {
          backgroundColor: '$surface',
        },
      }
    }
  ],

  defaultVariants: {
    kind: 'primary',
    size: 'large',
    tone: 'primary',
  }
});

function Button({
  as,
  id,
  label,
  type = 'button',
  kind = 'primary',
  tone = 'primary',
  size = 'large',
  isDisabled =  false,
  onClick
}: TButtonProps) {
  return (
    <BaseButton
      css={{
        cursor: isDisabled ? 'not-allowed' : 'pointer',
      }}
      id={id}
      type={type}
      kind={kind}
      size={size}
      tone={tone}
      disabled={isDisabled}
      aria-label={label}
      aria-disabled={isDisabled}
      onClick={onClick}
    >
      {label}
    </BaseButton>
  );
}

export default Button;