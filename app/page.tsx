import MessageForm from "@/components/message-form";
import { getMessagesFromDatabase } from "@/actions/get-messages-from-database";

export const runtime = "edge";

export default async function Home() {
  const messages = getMessagesFromDatabase();

  return (
    <main className="max-w-2xl mx-auto p-10">
      <MessageForm />

      <div className="p-10">
        <ul>
          {(await messages).map((message) => (
            <li key={message.id}>{message.message}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
