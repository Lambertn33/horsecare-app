export interface HostlerServiceInterface {
  id: number;
  name: string;
}

export interface HostlerInterface {
  id: number;
  names: string;
  description: string;
  services: HostlerServiceInterface[];
}

export interface HostlerParamsInterface {
  hostlerId: string;
}

export interface AppointmentDataInterface {
  names: string;
  email: string;
  date: Date;
  serviceId: string;
}

export interface NewAppointmentDataInterface {
  names: string;
  email: string;
  date: Date;
  serviceId: string;
  userId: string;
}

export interface BookingInterface {
  id: number;
  names: string;
  email: string;
  date: string;
  services: {
    name: string;
    price: number;
  };
  horsecares: {
    names: string;
  };
}
