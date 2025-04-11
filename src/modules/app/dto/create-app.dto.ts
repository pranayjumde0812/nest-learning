import { z } from 'zod';

export const CreateAppDto = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.number().min(18, 'Age must be at least 18'),
});

export type CreateAppDtoType = z.infer<typeof CreateAppDto>;
