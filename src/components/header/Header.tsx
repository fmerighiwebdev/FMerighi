"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton } from "@/once-ui/components";
import styles from "./Header.module.scss";

import { routes, display } from "@/app/resources";
import { person, home, about, blog, contacts } from "@/app/resources/content";

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
