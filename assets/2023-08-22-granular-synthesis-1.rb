use_osc "localhost", 3333

# Load a sample
sample_path = "/path/to/your/sample.wav"

# Define grain parameters
grain_size = 0.01
grain_rate = 0.5
grain_density = 0.1

# Play grains in a loop
live_loop :granulate do
  start_point = rrand(0, 1 - grain_size)
  sample :ambi_choir, start: start_point, finish: start_point + grain_size, rate: grain_rate
  sleep grain_density
end

live_loop :send_data do
  osc "/grain_size", grain_size
  osc "/grain_rate", grain_rate
  osc "/grain_density", grain_density
  sleep 0.5
end