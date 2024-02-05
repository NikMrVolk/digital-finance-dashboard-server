import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

const start = async () => {
    try {
        const PORT = process.env.PORT || 5005
        const app = await NestFactory.create(AppModule)

        app.setGlobalPrefix('api')
        app.use(cookieParser())
        app.enableCors({
            origin: [
                'http://localhost:3000',
                'https://digital-finance-dashboard-72wsp0tyu-nikmrvolks-projects.vercel.app/',
            ],
            credentials: true,
            // exposedHeaders: 'set-cookie',
        })

        await app.listen(PORT, () =>
            console.log(`App started work on port ${PORT}`),
        )
    } catch (e) {
        console.log(e)
    }
}

start()
