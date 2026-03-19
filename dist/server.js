"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// import authRoutes from './routes/auth.routes'
// import staffRoutes from './routes/staff.routes'
// import appointmentRoutes from './routes/appointment.routes'
const auth_routes_1 = require("./modules/auth/auth.routes");
const client_1 = __importDefault(require("./prisma/client"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:3000', 'https://appointa.vercel.app'];
const corsOptions = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(corsOptions));
// app.use(cors({
//   origin: "http://localhost:3000"
// }))
app.use(express_1.default.json());
// app.use('/auth', authRoutes)
// app.use('/staff', staffRoutes)
app.use('/user', auth_routes_1.userRoute);
//app.use('/appointments', appointmentRoutes)
app.get('/', (req, res) => {
    res.send('Smart Queue API running');
});
async function startServer() {
    try {
        // Test the connection
        await client_1.default.$connect();
        console.log('✅ Database connected successfully');
        // Your server startup code
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    }
    catch (error) {
        console.error('❌ Failed to connect to database:', error);
        process.exit(1);
    }
}
startServer();
//# sourceMappingURL=server.js.map