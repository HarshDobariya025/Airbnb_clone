import type { ReactNode } from 'react'
import type { Review } from '../../types'
import { Modal } from '@/components/common/Modal'
import { Avatar } from '@/components/common/Avatar'

interface ReviewsModalProps {
  reviews: Review[]
  totalCount: number
  onClose: () => void
}

/**
 * ReviewsModal — full list of reviews in a modal dialog.
 */
export function ReviewsModal({ reviews, totalCount, onClose }: ReviewsModalProps): ReactNode {
  const allReviews = [...reviews, ...reviews] // mirrors original doubled list

  return (
    <Modal
      id="reviews-modal"
      title={`${totalCount} reviews`}
      onClose={onClose}
    >
      <div className="modal-reviews" role="list">
        {allReviews.map((review, i) => (
          <article key={`${review.name}-${i}`} role="listitem">
            <Avatar initial={review.initial} />
            <div>
              <b>{review.name}</b>
              <small>
                {review.when} · ★ {review.score}
              </small>
              <p>{review.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Modal>
  )
}
