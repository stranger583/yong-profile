'use client'
import { cN } from "@utils/tw-marge";
import * as Accordion from '@radix-ui/react-accordion';

interface AccordionHeaderProps extends React.ComponentPropsWithoutRef<typeof Accordion.Header> {
    className?: string;
    children: React.ReactNode;
}
interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof Accordion.Item> {
    className?: string;
    children: React.ReactNode;
}
interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof Accordion.Trigger> {
    className?: string;
    children: React.ReactNode;
}
interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof Accordion.Content> {
    className?: string;
    children: React.ReactNode;
}


export const AccordionRoot = Accordion.Root

export function AccordionHeader({
    className,
    children,
    ...props
}: AccordionHeaderProps) {
    return (
        <Accordion.Header
            {...props}
            className={cN(className)}
        >
            {children}
        </Accordion.Header>
    );
}

export function AccordionContent({
    className,
    children,
    ...props
}: AccordionContentProps) {
    return (
        <Accordion.Content
            {...props}
            className={cN(``, className)}
        >
            {children}
        </Accordion.Content>
    );
}

export function AccordionTrigger({
    className,
    children,
    ...props
}: AccordionTriggerProps) {
    return (
        <Accordion.AccordionTrigger
            {...props}
            className={cN(``, className)}
        >
            {children}
        </Accordion.AccordionTrigger>
    );
}

export function AccordionItem({
    className,
    children,
    ...props
}: AccordionItemProps) {
    return (
        <Accordion.Item
            {...props}
            className={cN(``, className)}
        >
            {children}
        </Accordion.Item>
    );
}
