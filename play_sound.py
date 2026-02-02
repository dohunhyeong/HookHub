import pygame
import sys
from pathlib import Path


def main():
    # Initialize pygame mixer
    pygame.mixer.init()

    # Get the path to the sound file (relative to this script)
    script_dir = Path(__file__).parent
    sound_file = script_dir / "ulala.wav"

    # Check if the file exists
    if not sound_file.exists():
        print(f"Error: Sound file not found at {sound_file}")
        sys.exit(1)

    # Load and play the sound
    try:
        sound = pygame.mixer.Sound(str(sound_file))
        sound.play()

        # Wait for the sound to finish playing
        while pygame.mixer.get_busy():
            pygame.time.wait(100)

        print("Sound played successfully!")
    except Exception as e:
        print(f"Error playing sound: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
