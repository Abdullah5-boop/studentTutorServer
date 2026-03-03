import { prisma } from "../../../lib/prisma";

const ProfileGeOneService = async ({ email }: { email: string }) => {
  const profile = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return profile;
};

interface ProfileUpdatePayload {
  name?: string;
  email?: string;
  phone?: string;
  image?: string;
  bio?: string;
  age?: number;
  city?: string;
  country?: string;
  isActive?: boolean;
}

export const profileUpdateService = async (
  userId: string,
  payload: ProfileUpdatePayload,
) => {
  const data: Partial<ProfileUpdatePayload> = {};

  if (payload.name !== undefined) data.name = payload.name;
  if (payload.email !== undefined) data.email = payload.email;
  if (payload.phone !== undefined) data.phone = payload.phone;
  if (payload.image !== undefined) data.image = payload.image;
  if (payload.bio !== undefined) data.bio = payload.bio;
  if (payload.age !== undefined) data.age = payload.age;
  if (payload.city !== undefined) data.city = payload.city;
  if (payload.country !== undefined) data.country = payload.country;
  if (payload.isActive !== undefined) data.isActive = payload.isActive;

  if (Object.keys(data).length === 0) {
    throw new Error("No fields provided to update");
  }

  return prisma.user.update({
    where: { id: userId }, // ✅ always use ID
    data,
  });
};

export const ProfileServices = {
  ProfileGeOneService,
  profileUpdateService,
};
