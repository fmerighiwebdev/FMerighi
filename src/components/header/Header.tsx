"use client";

import { usePathname } from "next/navigation";

import { Fade, Flex, ToggleButton } from "@/once-ui/components";
import styles from "./Header.module.scss";

import { routes } from "@/app/resources";
import { about, contacts, blog } from "@/app/resources/content";

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        show="s"
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {routes["/"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/"
                    label={about.label}
                    selected={pathname === "/"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/"
                    selected={pathname === "/"}
                  />
                </>
              )}
              {routes["/contacts"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="contacts"
                    href="/contacts"
                    label={contacts.label}
                    selected={pathname.startsWith("/contacts")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="contacts"
                    href="/contacts"
                    selected={pathname.startsWith("/contacts")}
                  />
                </>
              )}
              {routes["/work"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="code"
                    href="/work"
                    label="Work"
                    selected={pathname.startsWith("/work")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="code"
                    href="/work"
                    selected={pathname.startsWith("/work")}
                  />
                </>
              )}
              {routes["/blog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="newsPost"
                    href="/blog"
                    label={blog.label}
                    selected={pathname.startsWith("/blog")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="newsPost"
                    href="/blog"
                    selected={pathname.startsWith("/blog")}
                  />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
