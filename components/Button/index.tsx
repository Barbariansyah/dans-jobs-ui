import React, { FunctionComponent } from 'react';
import { ButtonStyle, CenterButtonStyle, ActionButtonStyle } from './style';
import LinkWrapper from '@components/LinkWrapper';

interface ButtonProps {
    w: string;
    h: string;
    bc?: string;
    c?: string;
    ph: string;
    href: string;
    ws?: string;
    hs?: string;
}

interface ActionButtonProps {
    w: string;
    h: string;
    bc?: string;
    c?: string;
    ph: string;
    ws?: string;
    hs?: string;
    onClick?: () => void;
    margin?: string;
}

export const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    return (
        <LinkWrapper link={props.href}>
            <ButtonStyle w={props.w} h={props.h} bc={props.bc} c={props.c} href={props.href}>
                {props.ph}
            </ButtonStyle>
        </LinkWrapper>
    );
};

export const CenterButton: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    return (
        <LinkWrapper link={props.href}>
            <CenterButtonStyle w={props.w} h={props.h} bc={props.bc} c={props.c} href={props.href}>
                {props.ph}
            </CenterButtonStyle>
        </LinkWrapper>
    );
};

export const ActionButton: FunctionComponent<ActionButtonProps> = (props: ActionButtonProps) => {
    return (
        <ActionButtonStyle
            margin={props.margin}
            w={props.w}
            h={props.h}
            bc={props.bc}
            c={props.c}
            onClick={props.onClick}
        >
            {props.ph}
        </ActionButtonStyle>
    );
};
