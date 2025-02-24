"use client";

import { Button, Flex, Icon, Input, Textarea } from "@/once-ui/components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useEffect, useState } from "react";
import Toast from "../toast/Toast";

const formSchema = z.object({
  fullName: z
    .string()
    .nonempty({ message: "Inserisci il tuo nome e cognome" })
    .min(2, { message: "Il nome deve contenere almeno due caratteri" })
    .regex(/^[a-zA-Z\s]+$/, "Il nome può contenere solo lettere e spazi"),
  company: z
    .string()
    .nonempty({ message: "Inserisci il nome della tua azienda" }),
  email: z.string().email({ message: "Inserisci un indirizzo email valido" }),
  phone: z
    .string()
    .nonempty({ message: "Inserisci il tuo numero di telefono" })
    .regex(/^\+?\d{10,15}$/, "Inserisci un numero di telefono valido"),
  message: z.string().nonempty({ message: "Inserisci un messaggio" }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 5000);
      return () => clearTimeout(timer);
    } 
  }, [success, error]);

  async function onSubmit(data: FormData) {
    try {
      const response = await axios.post("/api/contacts", data);
      setSuccess(response.data.message);
    } catch (error) {
      console.error(error);
      setError(error.response.data.message);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap="8" mobileDirection="column">
          <Input
            id="fullName"
            label="Nome e cognome"
            type="text"
            errorMessage={errors.fullName?.message}
            {...register("fullName")}
            hasPrefix={<Icon name="user" />}
          />
          <Input
            id="company"
            label="Azienda (o privato)"
            type="text"
            errorMessage={errors.company?.message}
            {...register("company")}
            hasPrefix={<Icon name="company" />}
          />
        </Flex>
        <Flex marginTop="8" gap="8" mobileDirection="column">
          <Input
            id="email"
            label="Email"
            type="email"
            errorMessage={errors.email?.message}
            {...register("email")}
            hasPrefix={<Icon name="emailOutline" />}
          />
          <Input
            id="phone"
            label="Telefono"
            type="tel"
            errorMessage={errors.phone?.message}
            {...register("phone")}
            hasPrefix={<Icon name="phoneOutline" />}
          />
        </Flex>
        <Textarea
          id="message"
          label="Messaggio"
          lines={4}
          errorMessage={errors.message?.message}
          {...register("message")}
          className="mt-8"
        />
        <Flex marginTop="16" gap="8" horizontal="center">
          <Button
            variant="primary"
            size="l"
            loading={isSubmitting}
            label="INVIA"
            type="submit"
          />
        </Flex>
      </form>
      {success && <Toast variant="success" message={success} />}
      {error && <Toast variant="danger" message={error} />}
    </>
  );
}
