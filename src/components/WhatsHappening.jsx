import { WHATS_HAPPENING } from '../data/whatsHappening';
import styles from './WhatsHappening.module.css';

export default function WhatsHappening() {
  const { orderDrop, popUp } = WHATS_HAPPENING;
  const orderOpen = orderDrop.status === 'open';
  const orderClosed = orderDrop.status === 'closed';
  const popupOn = popUp.status === 'scheduled';
  const showCards = orderOpen || orderClosed || popupOn;

  if (!showCards) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyHeadline}>waiting on something sweet? so am I.</div>
        <div className={styles.emptyBody}>No drops or pop-ups scheduled right now — but I'll let you know the second that changes.</div>
        <button type="button" className={styles.outlineRoseButton}>
          Notify me
        </button>
      </div>
    );
  }

  return (
    <div className={styles.cards}>
      {orderOpen && (
        <div className={styles.card}>
          <div className={styles.statusRow}>
            <span className={styles.dotOpen} />
            Order drop · open now
          </div>
          <div className={styles.cardTitle}>This week's drop</div>
          <div className={styles.cardLine}>{orderDrop.windowText}</div>
          <div className={styles.urgency}>{orderDrop.urgencyText}</div>
          <button type="button" className={styles.solidButton}>
            Place an order
          </button>
        </div>
      )}

      {orderClosed && (
        <div className={styles.card}>
          <div className={styles.statusRow}>
            <span className={styles.dotClosed} />
            Order drop · closed
          </div>
          <div className={styles.cardTitle}>Next drop</div>
          <div className={styles.cardLineTight}>{orderDrop.reopensText}</div>
          <button type="button" className={styles.outlineButton}>
            Notify me when it opens
          </button>
        </div>
      )}

      {popupOn && (
        <div className={styles.popupCard}>
          <div className={styles.popupLabel}>Pop-up · in person</div>
          <div className={styles.popupTitle}>{popUp.dateText}</div>
          <div className={styles.popupLine}>{popUp.location}</div>
          <button type="button" className={styles.popupButton}>
            Get directions
          </button>
        </div>
      )}
    </div>
  );
}
