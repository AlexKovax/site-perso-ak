import { conferences } from '../data/conferences'
import styles from './ConferenceTable.module.css'

function ConferenceTable() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Événement</th>
            <th>Titre</th>
            <th>Replay</th>
          </tr>
        </thead>
        <tbody>
          {conferences.map((conf, index) => (
            <tr key={index}>
              <td className={styles.date}>{conf.date}</td>
              <td className={styles.event}>{conf.event}</td>
              <td className={styles.title}>{conf.title}</td>
              <td>
                {conf.replay ? (
                  <a
                    href={conf.replay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.replayLink}
                  >
                    Voir →
                  </a>
                ) : (
                  <span className={styles.noReplay}>—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ConferenceTable
