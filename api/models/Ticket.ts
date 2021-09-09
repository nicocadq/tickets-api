import { Document, model, Model, Schema } from 'mongoose';

enum status { 
  new = 'NEW',
  solved = 'SOLVED'
}

interface TicketModel extends Document {
  subject: string;
  from: string;
  status: string;
  body: string;
}

const TicketSchema: Schema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    subject: { type: String, required: true },
    from: { type: String, required: true },
    status: { type: String, enum: Object.values(status), default: status.new, required: true },
    body: { type: String, required: true }
  },
  { 
    timestamps: true 
  },
);

const Ticket: Model<TicketModel> = model('Ticket', TicketSchema);

export default Ticket;