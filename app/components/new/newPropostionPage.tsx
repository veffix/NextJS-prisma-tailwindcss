'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import {FormEvent} from "react"

interface NewPropostionPageProps {
    boardId: number
}

const NewPropostionPage: React.FC<NewPropostionPageProps> = ({boardId}) => {
    const router = useRouter()

    const handleValidate = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault()
const formData = new FormData(e.currentTarget)
const title = formData.get('title')
axios.post('/api/proposition', {title, boardId}).then(() => {
    router.refresh()
})
    }
    return ( <div><form onSubmit={handleValidate} className="flex flex-col p-4">
        <label className="text-xl mb-3 mt-5">Nouvelle Proposition :</label>
        <input name='title' className="bg-gray-500"/>
        <button type="submit">valider</button>
        </form></div> );
}
 
export default NewPropostionPage;