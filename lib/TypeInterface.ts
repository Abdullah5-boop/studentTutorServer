export enum BookingStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}
export interface Category {
  id: string;
  name: string;
  description?: string | null;
  createdAt: Date;
}

export interface Booking {
  id: string;
  studentId: string;
  tutorId: string;
  startTime: Date;
  endTime: Date;
  status: BookingStatus;
  createdAt: Date;
}

export interface Review {
  id: string;
  bookingId: string;
  studentId: string;
  tutorId: string;
  rating: number;
  comment?: string | null;
  createdAt: Date;
}

export interface AvailabilitySlot {
  id: string;
  tutorId: string;
  startTime: Date;
  endTime: Date;
  isBooked: boolean;
}
export interface TutorProfile {
  id?: string;

  bio: string | null;
  hourlyRate: number;
  averageRating?: number;
  isApproved?: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  categories?: Category[];
  bookings?: Booking[];
  reviews?: Review[];
  availability?: AvailabilitySlot[];
}
