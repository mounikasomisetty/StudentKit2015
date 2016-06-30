outdir = 'compressed';
indir = 'medium';
in_paths = arrayfun(@(x) x.name, dir(indir), 'UniformOutput', false);
in_paths = in_paths(3:size(in_paths));
for i=3:size(in_paths)
    im = imread([indir '\' in_paths{i}]);
    imwrite(im,[outdir '\' in_paths{i}],'Quality', 80);
end

