import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// List of medications
app.get('/medications', (req: Request, res: Response) => {
    res.json([

        { id: 1, name: 'Medikinet' },
        { id: 2, name: 'Ritalin' },
        { id: 3, name: 'Adderall' },
    ]);
});

// Medication details
app.get('/medications/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const medicationDetails = {
        id: id,
        name: 'Medikinet',
        description: 'Medikinet is a medication used to treat ADHD.',
        maxDosage: 80,
    };

    res.json(medicationDetails);
});

// Side effects
app.get('/side_effects/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const sideEffects = [
        'Nausea',
        'Headache',
        'Loss of appetite',
        'Insomnia',
    ];

    res.json(sideEffects);
});

// Drug interactions
app.get('/interactions/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    // Replace with real data from your database
    const interactions = [
        'Alcohol',
        'Antidepressants (e.g., MAOIs)',
        'Antihistamines',
        'Blood pressure medications',
    ];

    res.json(interactions);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
