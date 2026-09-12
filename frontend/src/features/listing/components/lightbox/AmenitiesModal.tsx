import type { ReactNode } from 'react'
import type { Amenity } from '../../types'
import { Modal } from '@/components/common/Modal'
import { Icon } from '@/components/common/Icon'
import { ALL_AMENITIES } from '../../constants/mock-data'

interface AmenitiesModalProps {
  amenities: Amenity[]
  onClose: () => void
}

/**
 * AmenitiesModal — "What this place offers" full list in a modal dialog.
 */
export function AmenitiesModal({ amenities, onClose }: AmenitiesModalProps): ReactNode {
  return (
    <Modal id="amenities-modal" title="What this place offers" onClose={onClose}>
      <div className="modal-list" role="list">
        {ALL_AMENITIES.map((name, i) => {
          const amenity = amenities[i % amenities.length]
          return (
            <div key={name} role="listitem">
              <Icon name={amenity?.icon ?? 'House'} />
              {name}
            </div>
          )
        })}
      </div>
    </Modal>
  )
}
