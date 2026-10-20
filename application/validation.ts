import * as v from 'valibot';

const dataSchema = v.array(
  v.object({
    first: v.string(),
    last: v.string(),
    email: v.string(),
    address: v.string(),
    created: v.string(),
    balance: v.string(),
  }),
);

export type Data = v.Output<typeof dataSchema>;

export const validateData = (data: unknown): Data => {
  return v.parse(dataSchema, data);
};
