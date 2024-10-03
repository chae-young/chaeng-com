import { faker } from "@faker-js/faker";


export default function ChatRoom() {
    const user = {
        id: 'herr',
        nickname: '김영웅',
        image: faker.image.avatar(),
    }

    const messages = [
        {messageId: 1, id: 'chaeng', content: '안녕하이룽방가방가??', createdAt: new Date()},
        {messageId: 2, id: 'herr', content: 'dmd qkdrkqkdrk~~', createdAt: new Date()},
    ]

    return (
        <div>
            {messages.map((message) => 
                {
                    if (message.id === 'herr') {
                        return (
                            <div key={message.messageId} className="flex justify-end">
                                <div className="p-2 mr-2 text-white bg-blue-400 rounded-t-lg rounded-bl-lg ">{message.content}</div>
                            </div>
                        )
                    }
                    return (
                        <div key={message.messageId} className="flex">
                            <div className="p-2 ml-2 text-white bg-gray-400 rounded-t-lg rounded-br-lg">{message.content}</div>
                        </div>
                    )
                }
            )}
        </div>
    )
}