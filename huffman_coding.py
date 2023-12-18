import os
class HuffmanCoding:
    def __init__(self, path):
        self.path = path
        self.heap = []
        self.codes = {}
    
    def make_frequency_dict(self, text):
        """Calculate Frequency and return"""

    def make_heap(self, frequency):
        """Make priority queue"""

    def merge_codes(self):
        """Build Huffman tree. Save root node in heap"""
    
    def make_codes(self):
        """Make codes for characters and save"""

    def get_encoded_text(self, text):
        """Replace characters with code and return"""

    def pad_encoded_text(self, encoded_text):
        """Pad encoded text and return"""

    def get_byte_array(self, padded_encoded_text):
        """Convert bits into bytes. Return byte array"""
    
    def compress(self):
        filename, file_ext = os.path.splitext(self.path)
        output_path = filename + ".bin"

        with open(self.path, "r") as file, open(output_path, 'wb') as output:
            text = file.read()
            text = text.rstrip()

            frequency = self.make_frequency_dict(text)

            self.make_heap(frequency)
            self.merge_codes()

            encoded_text = self.get_encoded_text(text)
            padded_encoded_text = self.pad_encoded_text(encoded_text)

            b = self.get_byte_array(padded_encoded_text)
            output.write(bytes(b))

        print("Compressed")
        return output_path