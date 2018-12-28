import kotlin.js.Date

class Key(val id: String,
          val domainGlobs: List<String>) {

    val eventMapper = require("EventMapper")

    fun getEvents(startTime: Date, endTime: Date): List<Event> {
        return eventMapper.selectEvents(id, startTime, endTime) as List<Event>
    }
}