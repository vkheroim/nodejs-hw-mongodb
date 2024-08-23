import { model, Schema } from 'mongoose';

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enam: ['personal', 'work', 'home'],
      default: 'personal',
    },
  },
  { versionKey: false, timestamps: true },
);

export const Contact = model('contacts', contactsSchema);
