"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
// List of medications
app.get('/medications', (req, res) => {
    res.json([
        { id: 1, name: 'Medikinet' },
        { id: 2, name: 'Ritalin' },
        { id: 3, name: 'Adderall' },
    ]);
});
// Medication details
app.get('/medications/:id', (req, res) => {
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
app.get('/side_effects/:id', (req, res) => {
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
app.get('/interactions/:id', (req, res) => {
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
