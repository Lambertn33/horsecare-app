import { FC } from "react";
import { Table } from "flowbite-react";

import { BookingInterface } from "@/interfaces";

interface AppointmentsTableProps {
  bookings?: BookingInterface[];
}

export const AppointmentsTable: FC<AppointmentsTableProps> = ({ bookings }) => {
  const RenderBookingRow: FC<{ booking: BookingInterface }> = ({ booking }) => {
    return (
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {booking.names}
        </Table.Cell>
        <Table.Cell>{booking.email}</Table.Cell>
        <Table.Cell>{booking.horsecares.names}</Table.Cell>
        <Table.Cell>{booking.services?.name}</Table.Cell>
        <Table.Cell>{booking.date}</Table.Cell>
      </Table.Row>
    );
  };

  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>User names</Table.HeadCell>
          <Table.HeadCell>User email</Table.HeadCell>
          <Table.HeadCell>Hostler</Table.HeadCell>
          <Table.HeadCell>Service</Table.HeadCell>
          <Table.HeadCell>Appointment date</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {bookings?.map((booking) => (
            <RenderBookingRow key={booking.id} booking={booking} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
