import { CollectionConfig } from 'payload';

const QuestionsBank: CollectionConfig = {
    slug: 'bk_speaker_media',

    fields: [
        {
            name: 'pregunta',
            type: 'text',
        },
        {
            name: 'categoria',
            type: 'text',
        },
        {
            label: 'ID en el archivo Excel',
            name: 'id_excel',
            type: 'text',
        },
        {
            label: 'Tipo de pregunta',
            name: 'tipo_de_pregunta',
            type: 'text',
        },
        {
            name: 'estatus',
            type: 'text',

        },
        {
            label: 'Ultima modificacion',
            name: 'ultima_modificacion',
            type: 'text',
        }

    ],
};

export default QuestionsBank;