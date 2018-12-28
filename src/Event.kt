import kotlin.js.Date

data class Event(val domain: String,
                 val location: String,
                 val name: String,
                 val time: Date)
