/**
 * @author Josh Stuart <joshstuartx@gmail.com>
 */

module.exports = {
    headings: [
        'Date',
        'Group',
        'Animal ID',
        'Day',
        'Stage',
        'Correction Trial',
        'Distance',
        'Pattern',
        'Sample',
        'Correct Latency',
        'Delay',
        'Number of tries'
    ],
    fields: {
        'Date': 'schedule-run-date',
        'Group': 'group-id',
        'Animal ID': 'animal-id',
        'Day': '',
        'Stage': '',
        'Correction Trial': 'trials.number-correct',
        'Distance': 'trials.distance-gp',
        'Pattern': 'trials.pattern-number',
        'Sample': 'trials.sample-side',
        'Correct Latency': 'trials.correct-image-response-latency',
        'Delay': 'trials.delay',
        'Number of tries': ''
    }
};
