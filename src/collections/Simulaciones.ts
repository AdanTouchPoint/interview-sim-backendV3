import { CollectionConfig } from 'payload';

const Simulaciones: CollectionConfig = {
    slug: 'simulaciones',

    fields: [
        {
            name: 'nombre',
            type: 'text',
        },
        {
            name: 'apellido',
            type: 'text',
        },
        {
            name: 'email',
            type: 'text',
        },
        {
            name: 'empresa',
            type: 'text',
        },
        {
            name: 'website',
            type: 'text',
        },
        {
            label: 'Descripcion del negocio',
            name: 'descripcion_del_negocio',
            type: 'text'
        },
        {
            label: 'Nivel de responsabilidad',
            name: 'nivel_de_responsabilidad',
            type: 'text',
        },
        {
            name: 'pregunta1',
            type: 'text',
        },
        {
            label: 'Tiempo 1 (segundos)',
            name: 'tiempo1',
            type: 'number',
        },
        {
            name: 'pregunta2',
            type: 'text',
        },
        {
            label: 'Tiempo 2 (segundos)',
            name: 'tiempo2',
            type: 'number',
        },
        {
            name: 'pregunta3',
            type: 'text',
        },
        {   
            label: 'Tiempo 3 (segundos)',
            name: 'tiempo3',
            type: 'number',
        },
        {
            name: 'categoria',
            type: 'text',
        },
        {
            label: 'Tiempo Total(segundos)',
            name: 'tiempo_total',
            type: 'number',
        },
        {
            label: 'Fecha de envio',
            name: 'fecha_de_envio',
            type: 'text',
        },
        {
            name: 'videoId',
            label: 'Video de la simulacion',
            type:'text',
            admin: {
                components: {
                    Cell: './components/cells/VideoCell'
                   // Field: './components/fields/VideoField',
                },
            },
        }

    ],
};

export default Simulaciones;