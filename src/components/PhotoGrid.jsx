
import './PhotoGrid.css';

export function PhotoGrid() {
    const photos = Array(8).fill(null);

    return (
        <div className="photo-grid">
            {photos.map((_, index) => (
                <div key={index} className="photo-item">
                    <div className="photo-placeholder">
                        <span className="photo-icon">↗</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
